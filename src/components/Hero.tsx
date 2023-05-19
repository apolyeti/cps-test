import { Center, SlideFade, VStack} from "@chakra-ui/react";
import Counter from "./Counter";

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