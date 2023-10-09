import OpenAI from 'openai';
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, // Make sure to set this in your environment variables
    dangerouslyAllowBrowser: true, 
  });
  
  async function scan(contract) {
    
    const contractAnalysisResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are an expert at reviewing contracts. Summarize the following contract into a concise paragraph and then analyze the sentiment of the following contract. Is it okay for me to sign such a contract ? Think about this step by step"
            },
            {
                role: "user",
                content: contract
            }
        ]
    });


    const contractAnalysis = contractAnalysisResponse.choices[0].message.content;

    console.log("contract:", contractAnalysis)

    return contractAnalysis
  }
  
  export default scan;