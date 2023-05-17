import { useEffect, useState } from 'react';
import { Button, VStack, Center } from '@chakra-ui/react';

export default function Stopwatch({run} : {run: boolean}) {
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval : NodeJS.Timeout | undefined;
        if (run && !isRunning) {
            setStartTime(Date.now());
            setIsRunning(true);
        }
        if (!run && isRunning) {
            setIsRunning(false);
        }

        if (run) {
            interval = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                if (elapsedTime >= 5000) {
                    clearInterval(interval);
                    setTime(5000);
                } else {
                    setTime(elapsedTime)
                }
            }, 10);
        } else if (!run) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [run, isRunning, setStartTime]);
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