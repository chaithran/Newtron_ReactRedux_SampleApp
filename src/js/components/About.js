import React, { Component } from 'react'
import { Grommet, Main, Box, Image, Text, Heading, Paragraph } from 'grommet'

export default class About extends Component {
    render() {
        return (
                <Main fill="vertical" flex="grow" overflow="static" direction="column">
                    <Box align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" background={{ "color": "accent-4" }} border={{ "color": "active-background", "size": "medium", "side": "all", "style": "solid" }} elevation="small" round="medium">
                        <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" fill="horizontal" fit="contain" opacity="strong" />
                        <Text size="xxlarge" textAlign="center" weight="bold" margin="medium" color="graph-2">
                            ABOUT
          </Text>
                    </Box>
                    <Box align="center" justify="center">
                        <Heading level="3" size="medium" textAlign="center" truncate={false}>
                            WE ARE ALWAYS THERE FOR YOU
                            AS THE STRONG PARTNER BY YOUR SIDE     </Heading>
                        <Paragraph size="xlarge">
                            A leading provider of web-based solutions for the optimization of business relations between suppliers and buying companies
          </Paragraph>
                    </Box>
                    <Box align="center" justify="center">
                        <Heading level="3" size="medium" textAlign="center" truncate={false}>
                        OUR VISION</Heading>
                        <Paragraph size="xlarge">
                        “Trade smart”- comprehensible and for everyone!
It is with a bold and ambitious vision that we define the long-term direction of our company and enable our customers to benefit from a rewarding, continuous partnership.
            </Paragraph>
                    </Box>
                   
     </Main>
        )
    }
}
