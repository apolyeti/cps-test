import { useEffect, useState, useRef } from 'react';
import { Button, VStack, Center } from '@chakra-ui/react';
import InputTime from './InputTime';

interface StopwatchProps {
    run: boolean;
    checkTimeLimit: () => void;
    displayCPS: (num: number) => void;
    count: number;
}

export default function Stopwatch(props : StopwatchProps) {
    const { run, checkTimeLimit, displayCPS, count } = props;
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeDuration, setTimeDuration] = useState(5);

    

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
            const timeLimit = timeDuration * 1000;
            console.log(count)
            interval = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                if (elapsedTime >= timeLimit) {
                    clearInterval(interval);
                    setTime(timeLimit);
                    displayCPS(countRef.current / timeDuration);
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
        <VStack>
            <Center>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{ (("0" + ((time / 10) % 100)).slice(-2)) }</span>
            </Center>
            <InputTime handleDurationChange={setTimeDuration}/>
        </VStack>
    );
}