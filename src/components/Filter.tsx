import React from 'react';
import { FilterAltOutlined } from '@mui/icons-material';
import { Button, Popover } from '@mui/material';
import { Input, Select, Tag } from 'antd';
import { types } from 'helpers';

interface Props {
    filters: {
        type?: string[];
        item?: string[];
        order?: string[];
    };
    setFilters: any;
}
const Filter = ({ filters, setFilters }: Props) => {

    const [filtars, setFiltars] = React.useState(filters);

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const reset = () => {
        const defaultFilters = {
            type: [],
            item: [],
            order: [],
        };
        setFiltars(defaultFilters);
        setFilters(defaultFilters);
        handleClose();
    }

    const submit = () => {
        setFilters(filtars);
        handleClose();
    }

    const filtered: any = [];
    for (const f in filters) {
        const ff = filters[f as keyof typeof filters];
        if (ff && ff?.length > 0) {
            filtered.push(<Tag color="blue">{f.replace('trs_', '')}: {filters[f as keyof typeof filters]?.join(', ')}</Tag>);
        }
    }

    const convertSearchInputToArray = (str: string) => str ? str.replace(/[^0-9,]/g, '').split(' ').join('').split(',') : [];

    return (
        <React.Fragment>
            <div id="Filter">
                <div className="flex items-center">
                    <div className="flex cursor-pointer hover:text-slate-900" aria-describedby={id} onClick={handleClick}>
                        <FilterAltOutlined />&nbsp;
                        Filters&nbsp;&nbsp;
                        {filtered.map((filteredTag: any, i: number) => (
                            <span key={i}>{filteredTag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                elevation={2}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="p-4 w-80">
                    {Object.keys(filters).includes('item') && (
                        <div className="mb-4">
                            <div className="font-semibold mb-2">Item</div>
                            <Input.TextArea
                                rows={2}
                                value={filtars.item?.join(',')}
                                onChange={i => setFiltars((e: any) => ({ ...e, item: convertSearchInputToArray(i.target.value), }))}
                            />
                        </div>
                    )}

                    {Object.keys(filters).includes('order') && (
                        <div className="mb-4">
                            <div className="font-semibold mb-2">Order</div>
                            <Input.TextArea
                                rows={2}
                                value={filtars.order?.join(',')}
                                onChange={i => setFiltars((e: any) => ({ ...e, order: convertSearchInputToArray(i.target.value), }))}
                            />
                        </div>
                    )}

                    {Object.keys(filters).includes('type') && (
                        <div className="mb-4">
                            <div className="font-semibold mb-2">Type</div>
                            <Select
                                className="w-full"
                                value={filtars.type} mode="multiple"
                                onChange={type => setFiltars((e: any) => ({ ...e, type, }))}
                            >
                                {Object.keys(types.OrderTypes).map(option => (
                                    <Select.Option key={option} value={option}>{option}</Select.Option>
                                ))}
                            </Select>
                        </div>
                    )}

                    <div className="mt-8 border-t pt-8 flex justify-between">
                        <Button size="small" variant="outlined" disableElevation color="primary" onClick={reset}>
                            Reset
                        </Button>
                        <div className="mx-4">&nbsp;</div>
                        <Button size="small" variant="contained" disableElevation color="primary" onClick={submit}>
                            Filter
                        </Button>
                    </div>
                </div>
            </Popover>
        </React.Fragment>
    );
}


export default Filter;