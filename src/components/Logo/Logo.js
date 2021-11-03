import React from 'react';
import styles from "./Logo.module.scss";

const Logo = (props) => (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" width={50.816} height={73.113} {...props}>
        <g fill="none">
            <g className={styles.polygon} data-name="Polygon 1">
                <path d="M20.741 12.185L0 24.371V0z"/>
                <path d="M18.767 12.185L1 1.747v20.877l17.767-10.439m1.974 0L0 24.371V0L20.74 12.185z" fill="#38bdf2"/>
            </g>
            <g className={styles.polygon} data-name="Polygon 2">
                <path d="M0 36.557l20.741-12.186v24.371z"/>
                <path d="M1.974 36.557l17.767 10.438V26.118L1.974 36.557m-1.974 0L20.741 24.37v24.371L0 36.557z" fill="#38bdf2"/>
            </g>
            <g className={styles.polygon} data-name="Polygon 5">
                <path d="M50.816 36.556L30.075 48.742V24.371z"/>
                <path d="M48.842 36.556L31.075 26.118v20.877l17.767-10.439m1.974 0L30.075 48.742V24.37l20.741 12.185z" fill="#38bdf2"/>
            </g>
            <g className={styles.polygon} data-name="Polygon 3">
                <path d="M20.741 60.927L0 73.113V48.742z"/>
                <path d="M18.767 60.927L1 50.49v20.877l17.767-10.439m1.974 0L0 73.113V48.742L20.74 60.927z" fill="#38bdf2"/>
            </g>
            <g className={styles.polygon} data-name="Polygon 4">
                <path d="M30.075 60.928l20.741-12.186v24.371z"/>
                <path d="M32.05 60.928l17.766 10.438V50.489L32.05 60.928m-1.974 0l20.741-12.186v24.371L30.075 60.928z" fill="#38bdf2"/>
            </g>
            <g className={styles.polygon} data-name="Polygon 10">
                <path d="M30.075 12.186L50.816 0v24.371z"/>
                <path d="M32.05 12.186l17.766 10.438V1.747L32.05 12.186m-1.974 0L50.816 0v24.371L30.075 12.186z" fill="#38bdf2"/>
            </g>
        </g>
    </svg>
)
    
export default Logo