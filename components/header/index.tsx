import styles from "../header/Header.module.css"
import Image from "next/image"
export default function Header() {
    return(
        <>
    <main className={styles.headerContainer}>
        <header className={styles.header}>
<Image
src={"/Asset 2.svg"}
alt="logo"
width={100}
height={100}/>


<button>Sign Up</button>
        </header>
    </main>
        </>
    )
}   