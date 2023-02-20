import React from 'react';
import { types, func } from 'helpers';
import moment from 'moment';
import { Filter, LoadingMin } from 'components';

const List = () => {

    const [data, setData] = React.useState<types.Order[]>([] as types.Order[]);
    const [loading, setLoading] = React.useState(false);
    const [filters, setFilters] = React.useState({
        type: [] as types.OrderTypes[],
        item: [] as string[],
        order: [] as string[],
    });

    React.useEffect(() => {
        if (filters.type.length > 0 || filters.item.length > 0 || filters.order.length > 0) {
            getData();
        } else {
            setData([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const getData = async () => {
        setLoading(true);
        const res = await func.fetchAllOrders();
        setData(func.chunk(res, 20)[0]);
        setLoading(false);
    }

    let i = 1;

    return (
        <React.Fragment>
            <div className="bg-white p-4 flex justify-between items-center">
                <div className="flex items-center"></div>
                <div className="flex items-center">
                    <Filter filters={filters} setFilters={setFilters} />
                </div>
            </div>

            {loading && (<LoadingMin />)}

            {!loading && (
                <div>
                    <div className="bg-white rounded borders p-4s">
                        <table className="w-full p-4s ">
                            <thead className="bg-gray-50 dark:bg-gray-200">
                                <tr>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold"></th>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold">Order</th>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold">Type</th>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold">Item</th>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold">Category</th>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold">Description</th>
                                    <th className="border-b border-gray-100 p-3 text-left font-semibold">Date</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {data.length === 0 && (
                                    <tr>
                                        <td colSpan={15} align="center" className="border border-gray-200 p-4 m-3">No orders</td>
                                    </tr>
                                )}
                                {data.length > 0 && data.map(row => (
                                    <tr key={row.id} className="bg-gray-50s hover:bg-gray-100">
                                        <td className="border-b border-t border-ls border-gray-200 p-4 m-3">
                                            {i++}
                                        </td>
                                        <td className="border-b border-t border-gray-200 p-4 m-3 font-bold">
                                            {row.id}
                                        </td>
                                        <td className="border-b border-t border-gray-200 p-4">{row.type}</td>
                                        <td className="border-b border-t border-gray-200 p-4">{row.item.id}</td>
                                        <td className="border-b border-t border-gray-200 p-4">{row.category.id} - {row.category.name}</td>
                                        <td className="border-b border-t border-gray-200 p-4">{row.description}</td>
                                        <td className="border-b border-t border-gray-200 p-4">{moment(row.created_at).format('LLL')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default List;