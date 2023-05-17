import { useEffect, useState, useRef } from 'react';
import { Button, VStack, Center } from '@chakra-ui/react';

export default function Stopwatch({run, checkTimeLimit, displayCPS, count} : {run: boolean, checkTimeLimit: () => void, displayCPS: (num : number) => void, count : number}) {
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count;
    }, [count]);

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
            console.log(count)
            interval = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                if (elapsedTime >= 5000) {
                    clearInterval(interval);
                    setTime(5000);
                    displayCPS(countRef.current / 5);
                    checkTimeLimit();
                } else {
                    setTime(elapsedTime)
                }
            }, 10);
        } else if (!run) {
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [run, isRunning, setStartTime, countRef]);
    

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