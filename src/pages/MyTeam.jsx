import Three from '../components/Three';
const MyTeam = () => {
    return (
        <div>
            <h1>My Team</h1>
            <Three rootNodeClassName="node__root" branchNodeClassName="node__branch" leafNodeClassName="node__leaf" />
        </div>
    );
};

export default MyTeam;
