import { Center, Button, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import Counter from "./Counter";

export default function Hero() {
    const [count, setCount] = useState(0);
    return (
        <Center>
            <Counter />
        </Center>
    );
}