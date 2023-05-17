import { use, useEffect, useState } from 'react';
import { Button, VStack, Center } from '@chakra-ui/react';

export default function Stopwatch({run} : {run: boolean}) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval : any;
        if (run) {
            interval = setInterval(() => {
                setTime((prevTime) =>  {
                    const newTime = prevTime + 10;
                    if (newTime >= 5000) {
                        run = !run;
                        return 5000;
                    }
                    return newTime;
                });
            }, 10);
        } else if (!run) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [run]);
    return (
        <div>
            <Center>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </Center>
        </div>
    );
}