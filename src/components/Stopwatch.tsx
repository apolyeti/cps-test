import { use, useEffect, useState } from 'react';
import { Button, VStack, Center } from '@chakra-ui/react';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval : any;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running]);
    return (
        <div>
            <Center>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </Center>
            <VStack>
                <Button 
                    onClick={() => setRunning(!running)}
                    bgColor={'#7d476e'}
                    _hover={{
                        bgColor: '#9c608b',
                    }}>
                        {running ? "Stop" : "Start"}   
                </Button>
                <Button 
                    onClick={() => setTime(0)}
                    bgColor={'#7d476e'}
                    _hover={{
                        bgColor: '#9c608b',
                    }}>
                        Reset
                </Button>
            </VStack>
        </div>
    );
}