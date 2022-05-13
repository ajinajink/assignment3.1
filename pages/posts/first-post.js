import Link from 'next/link';

export default function FirstPost() {
    return (
        <>

            <h1><center>My Personal infomration</center></h1>
            <p><center>Name : Jina K.</center></p>
            <p><center>Gender : F</center></p>
            <p><center>MBTI : INFJ</center></p>
            <h2>
                <Link href="/">
                    <a><center>Back to home</center></a>
                </Link>
            </h2>
        </>
    );
} 
