import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {
    const iconMap: { [key:string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe
    }

    return ( 
      <HStack marginY={2}>
        {platforms.map((platform) => <Icon key={platform.slug} as={iconMap[platform.slug]} color='gray.500' />)}
      </HStack>
     );
}
 
export default PlatFormIconList;