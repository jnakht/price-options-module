
const LinkRecap = ({route}) => {
    const {path, name} = route;
    return (
        <div className="md:p-5">
            <li><a href={path}>{name}</a></li>
        </div>
    );
};

export default LinkRecap;