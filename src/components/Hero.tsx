import { Center, Button, Text, Box, SlideFade, VStack, Input} from "@chakra-ui/react";
import { useState } from "react";
import Counter from "./Counter";
import InputTime from "./InputTime";

export default function Hero() {
    return (
        <VStack>
            <SlideFade
                offsetY={"-20px"}
                in={true}
                transition={{
                    enter: {
                        duration: 0.75,
                        delay: 0.1,
                    },
                }}
                >
                <Center marginBottom={'20px'}>
                    <Counter />
                </Center>
            </SlideFade>
        </VStack>
    );
}