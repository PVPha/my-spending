import { Store } from '@/redux/store';
import axiosClient from '../core/config/axiosClient';
import homeSlicer, { HomeSlicer } from '@/redux/slicer/homeSlicer';
import _ from 'lodash';

export interface spending {
    Name: string;
    Price: string;
    Category: string;
    Desc: string;
}

class services {
    #NOTION_API = process.env.NEXT_PUBLIC_NOTION_API;
    handleCMD = (cmd: any) => {
        console.log(cmd);

        cmd?.map((item: any, index: number) => {
            console.log(item);
            switch (item) {
                case 'cd':
                    let directory = cmd?.splice(index + 1, 1);
                    Store.dispatch(HomeSlicer.actions.changeDirectory(directory?.join('')));
                    this.search(directory?.join(''));
                    break;
                case '-w':
                    let content = cmd?.splice(index + 1, 4);
                    let name = content[0]?.replace('"', '');
                    let price = content[1]?.replace('k', '000');
                    let category = '';
                    switch (content[2]) {
                        case 'sh':
                            category = 'Sinh hoạt';
                            break;
                        case 'au':
                            category = 'Ăn uống';
                            break;
                        case 'dc':
                            category = 'Đi chơi';
                            break;
                        case 'tt':
                            category = 'Thanh toán';
                            break;
                        case 'cv':
                            category = 'Cho vay';
                            break;
                        case 'ms':
                            category = 'Mua sắm';
                            break;
                        case 'tn':
                            category = 'Trả nợ';
                            break;
                        default:
                            break;
                    }
                    let desc = content[3]
                    Store.dispatch(HomeSlicer.actions.setSpending({ name, price, category, desc }));
                    this.createPage({
                        Name: name,
                        Price: price,
                        Category: category,
                        Desc: desc});
                    break;
                default:
                    break;
            }
        });
    };
    createPage = (data: spending) => {
        Store.dispatch(HomeSlicer.actions.setLoading(true));
        const url = this.#NOTION_API + '/pages';
        const req = {
            parent: {
                database_id: '{{DATABASE_ID}}',
            },
            properties: {
                Name: {
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: data.Name,
                            },
                        },
                    ],
                },
                Price: {
                    number: +data.Price,
                },
                Category: {
                    select: 'them vo day',
                },
                Desc: {
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: data.Desc,
                            },
                        },
                    ],
                },
            },
        };
        axiosClient
            .post(url, data)
            .then((res) => {})
            .catch((ex) => {
                console.log(ex);
            })
            .finally(() => {
                Store.dispatch(HomeSlicer.actions.setLoading(false));
            });
    };

    search = (queryText: string) => {
        Store.dispatch(HomeSlicer.actions.setLoading(true));
        const url = this.#NOTION_API + '/search';
        const payload = {
            query: queryText,
            sort: {
                direction: 'ascending',
                timestamp: 'last_edited_time',
            },
        };
        axiosClient
            .post(url, payload)
            .then((res) => {
                console.log(res);
                if (res.status === 200 && res.data?.type === 'page_or_database') {
                    Store.dispatch(HomeSlicer.actions.setPageOrDatabase(res.data?.results?.[0]));
                }
            })
            .catch((ex) => {
                console.log(ex);
            })
            .finally(() => {
                Store.dispatch(HomeSlicer.actions.setLoading(false));
            });
    };
}

export default new services();
