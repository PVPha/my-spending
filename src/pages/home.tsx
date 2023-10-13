import Input from '@/components/input';
import { Command, Result } from '@/redux/slicer/homeSlicer';
import { RootState } from '@/redux/store';
import service from '@/service';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const listCommand = useSelector((state: RootState) => state?.HomeSlicer?.command);
    const listResult = useSelector((state: RootState) => state?.HomeSlicer?.result);
    const loading = useSelector((state: RootState) => state?.HomeSlicer?.loading);
    const directory = useSelector((state: RootState) => state?.HomeSlicer?.directory);
    useEffect(() => {
        if (listCommand) {
            const lastCmd: Command = listCommand[listCommand.length - 1];
            const cmd = lastCmd?.value?.split(/("[^"]+"|\s+)/g)?.filter(item => !!item?.trim());
            console.log(cmd);
            service.handleCMD(cmd);
        }
    }, [listCommand]);
    return (
        <>
            <div
                onClick={() => {
                    console.log('click focus');
                }}>
                {listCommand &&
                    listCommand.map((cmd, index) => (
                        <>
                            <div className='d-flex align-items-center'>
                                <span>Home/{directory}</span>
                                <Input key={(cmd as Command)?.id} value={(cmd as Command)?.value || ''} disabled={true} />
                            </div>
                            {listResult &&
                                listResult
                                    .filter((result) => (result as Result)?.id === (cmd as Command)?.id)
                                    ?.map((result) => (
                                        <div key={(result as Result)?.id} className='d-flex align-items-center'>
                                            <span>Home/{directory}</span>
                                            <Input value={(result as Result)?.value || ''} disabled={true} />
                                        </div>
                                    ))}
                        </>
                    ))}
                <div className='d-flex align-items-center'>
                    <span>Home/{directory}</span>
                    <Input value={''} disabled={loading} />
                </div>
            </div>
        </>
    );
};

export default Home;
