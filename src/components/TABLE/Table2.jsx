

const Table2 = ({ detail, index }) => {
    const { name, time, calories } = detail;
    return (
        <div>
            <div className="overflow-x-auto bg-[#f8f8f8] m-2 rounded-lg">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{index + 1}</th>
                            <td>{name}</td>
                            <td>{time}</td>
                            <td>{calories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table2;