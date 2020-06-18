import React, { Component } from 'react'
import { Grommet, Main, Box, Image, Heading, Paragraph, Tabs, Tab, WorldMap } from 'grommet'
import { Action, Achievement, Aggregate, Ad } from 'grommet-icons'

export default class MainContent extends Component {
    render() {
        return (
            <>
             {/* <Main fill="vertical" flex="grow" overflow="auto"> */}
                <Box align="center" justify="center">
                    <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" fill="horizontal" fit="cover" />
                </Box>
                <Box align="center" justify="center" direction="column" pad="medium" gap="xxsmall" overflow="hidden">
                    <Heading level="2" truncate={false}>
                        4 steps to gain full control over your supply chain.
          </Heading>
                    <Paragraph size="xlarge" fill={true} color="accent-4" textAlign="center">
                        Shared supply chain collaboration platform connects you with your global business partners and ensures the long-term success of your suppliers
          </Paragraph>
                </Box>
                <Box align="center" justify="center">
                    <Tabs justify="center">
                        <Tab title="ASSESS RISK AND IMPACT" icon={<Action />} plain={false} reverse={false} />
                        <Tab title="ENSURE BUSINESS CONTINUITY" icon={<Achievement />} />
                        <Tab title="BUILT ON SUPPLY CHAIN COLLABORATION" icon={<Aggregate />} />
                        <Tab title="INTEGRATE TRANSPORTATION AND PRODUCTION" icon={<Ad />} />
                    </Tabs>
                    <WorldMap color="graph-2" fill="horizontal" hoverColor="accent-4" />
                </Box>
            {/* </Main> */}
            </>
        );
    }
}