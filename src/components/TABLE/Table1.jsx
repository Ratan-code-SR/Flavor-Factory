

const Table1 = ({ item, index }) => {
    // console.log(details);
    const { name, time, calories } = item;
    return (
        < >
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{index + 1}</th>
                            <td>{name}</td>
                            <td>{time}</td>
                            <td>{calories}</td>
                            <td><button className="btn btn-success rounded-full font-md">Preparing</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table1;