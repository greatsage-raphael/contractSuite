import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { UploadDropzone } from '@bytescale/upload-widget-react';
import * as pdfjsLib from 'pdfjs-dist';
import scan from "../utils/scan"
import { useEffect, useState } from 'react';



export default function Home() {
  const [advice, setAdvice] = useState("")
  const [loading, setLoading] = useState(false);
  const [signerEmail, setSignerEmail] = useState("");
  const [link, setLink] = useState("")
  const [initiatorEmail, setInitiatorEmail] = useState("");


async function fetchText(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);
      }
      const text = await response.text();
      return text;
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
  }
}

async function getPdfText(url) {
  try {
      setLoading(true)
      const pdf = await pdfjsLib.getDocument(url).promise;
      let textContent = '';
      for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const text = await page.getTextContent();
          text.items.forEach(item => {
              textContent += item.str + ' ';
          });
      }
            const scanResult = await scan(textContent)
              setAdvice(scanResult)
              setLoading(false)
               setLink(url)
              console.log("link", link)
            console.log(scanResult)
      return textContent;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}


function AudioUploader() {
  const options = {
    apiKey: process.env.NEXT_PUBLIC_UPLOAD || "free",
    maxFileCount: 1,
    mimeTypes: ["application/pdf", "text/plain"],
    styles: { colors: { primary: "#000" } },
  };

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;
  }, [])

  return (
    <div>
      <UploadDropzone
        options={options}
        onUpdate={async ({ uploadedFiles }) => {
          if (uploadedFiles.length !== 0) {
            console.log("url:", uploadedFiles[0].fileUrl)
            console.log("mime:", uploadedFiles[0].originalFile.mime)
            if(uploadedFiles[0].originalFile.mime === "application/pdf"){
              const text = await getPdfText(uploadedFiles[0].fileUrl)
              console.log("text:", text)
              // const result = await signContract(uploadedFiles[0].fileUrl, "bizzicole87@gmail.com", "collinsmwambazi88@gmail.com")
              // console.log("Result:", result)
            } else {
            const contract = await fetchText(uploadedFiles[0].fileUrl)
            console.log("contract:", contract)
            const scanResult = scan(contract)
            console.log(scanResult)
          }
        }
        }}
        width="600px" 
    height="250px"
      />
    </div>
  );
}

async function signContract(fileUrl, signerEmailAddress, initiatorEmailAddress) {
  const url = 'https://api.hellosign.com/v3/signature_request/send';
  const apiKey = process.env.NEXT_PUBLIC_sign;

  let formData = new FormData();
  formData.append('file_urls[0]', fileUrl);
  formData.append('title', 'Document Signing');
  formData.append('subject', 'Please Review And Sign The Document');
  formData.append('message', 'Please Review And Sign The Document');
  formData.append('signers[0][email_address]', signerEmailAddress);
  formData.append('signers[0][name]', signerEmailAddress);
  formData.append('signers[0][order]', '0');
  formData.append('signers[1][email_address]', initiatorEmailAddress);
  formData.append('signers[1][name]', initiatorEmailAddress);
  formData.append('signers[1][order]', '1');
  formData.append('metadata[custom_id]', '1234');
  formData.append('metadata[custom_text]', 'NDA #9');
  formData.append('signing_options[draw]', '1');
  formData.append('signing_options[type]', '1');
  formData.append('signing_options[upload]', '1');
  formData.append('signing_options[phone]', '1');
  formData.append('signing_options[default_type]', 'draw');
  formData.append('field_options[date_format]', 'DD - MM - YYYY');
  formData.append('test_mode', '1');

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Authorization': 'Basic ' + btoa(apiKey + ':')
          },
          body: formData
      });

      if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);
      }
      
      const data = await response.json();
      console.log(data);

  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}







function SignContractButton({ fileUrl, initiatorEmail, signerEmail }) { 
  return (
      <button className={styles.button} onClick={() => signContract(fileUrl, initiatorEmail, signerEmail)} >
          Sign contract
      </button>
  );
}


  return (
    <>
    <Header />
    <div className={styles.container}>
      <AudioUploader />
      {advice && (
            <>
              <div>
              <h2 >Analysis ✍🏾</h2>
              <p>{advice}</p>
              </div>

              <div>
              <label>
                First Signer email address: 
                <input 
                    name="first signer email address" 
                    value={initiatorEmail}
                    onChange={(e) => setInitiatorEmail(e.target.value)}
                />
            </label> <br />
            

            <label>
                Second Signer email address: 
                <input 
                    name="second signer email address" 
                    value={signerEmail}
                    onChange={(e) => setSignerEmail(e.target.value)}
                />
            </label>
            </div>
            <br />
              <SignContractButton fileUrl={link} initiatorEmail={initiatorEmail} signerEmail={signerEmail}/>
            </>
          )}
      {loading && (
            <h1>Loading ...</h1>
          )}
    </div>
    <Footer />
    </>
  );
}
