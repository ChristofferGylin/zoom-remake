const ButtonLink = ({ isSolid, isMenu, title, link }) => {

    let startTag;
    let endTag;

    let classContent = `w-fit px-4 py-2 mr-6 font-semibold border border-zoom-blue rounded-full`

    if (isSolid) {

        classContent += ` bg-zoom-blue hover:bg-blue-800 text-white`;

    } else {

        classContent += ` bg-white hover:bg-slate-200 text-zoom-blue`;

    }

    if (isMenu) {

        classContent += ` hidden sm:flex`;

    }
    return (

        <a href={link} className={classContent}>{title}</a>
    )



}

export default ButtonLink;