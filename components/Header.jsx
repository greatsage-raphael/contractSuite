import React from 'react';
import { IconExternalLink } from "@tabler/icons-react";
import styles from "../styles/Home.module.css";

export const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftNav}>
                <a href="/" className={styles.logoLink}>
                    ContractScan🔦📑
                </a>
            </div>
            <div className={styles.rightNav}>
                <a
                    className={styles.externalLink}
                    href="https://the-constitution-of-uganda.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={styles.linkText}>LawSuite</span>
                    <IconExternalLink className={styles.externalIcon} size={20} />
                </a>
            </div>
        </nav>
    );
};
