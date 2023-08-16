function Footer({author,copyright}){
    return(
        <footer><p>@{copyright} {author}</p></footer>
    );
} 

Footer.defaultProps = {
    copyright: new Date().getFullYear(),
    author:'Unknown',
}

export default Footer;