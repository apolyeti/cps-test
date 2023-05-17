import { Center, Button, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import Counter from "./Counter";
import Stopwatch from "./Stopwatch";

export default function Hero() {
    const [count, setCount] = useState(0);
    return (
        <Center>
            <Counter />
            <Stopwatch />
        </Center>
    );
}