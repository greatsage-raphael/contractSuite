import React from 'react';
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import styles from "../styles/Home.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <a 
                href='http://mwambazi-collins.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.footerText}
            >
                Built with 🎧 & ❤️ in Kampala.
            </a>
            <div className={styles.socialIcons}>
                <a
                    className={styles.iconLink}
                    href="https://twitter.com/thesupremesage"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IconBrandTwitter size={24} />
                </a>
                <a
                    className={styles.iconLink}
                    href="https://github.com/greatsage-raphael/TheConstitutionOfUganda"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IconBrandGithub size={24} />
                </a>
            </div>
        </div>
    );
};
