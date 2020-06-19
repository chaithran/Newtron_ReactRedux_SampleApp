import React, { Component } from 'react'
import { Grid, Main, Box, Image, Text, Heading, Paragraph } from 'grommet'
import './../../App.css'

const boxStyle={
    "align":"center",
    "justify":"center","direction":"column","pad":"medium","gap":"small",
    "fill":"horizontal","background":'{{"color":"accent-4"}}',
    "border":'{{"color":"active-background","size":"medium","side":"all","style":"solid"}}',
    "elevation":"small","round":"medium"
}
export default class Contact extends Component {
    render() {
        return (
            <Main fill="vertical" flex="grow" overflow="static" direction="column">
                <Box >
                 {/* align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" background={{ "color": "accent-4" }} border={{ "color": "active-background", "size": "medium", "side": "all", "style": "solid" }} elevation="small" round="medium"> */}
                    <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" fill="horizontal" fit="contain" opacity="strong" />
                    <Text size="medium" textAlign="center" weight="bold" margin="medium" color="graph-2">
                        Contact
                    </Text>
                </Box>
                <Box align="center" justify="center">
                    <Heading level="3" size="medium" textAlign="center" truncate={false}>
                        Your direct line to Us !
                    </Heading>
                </Box>
                <Box>
                    <Grid
                        rows={['auto', 'auto', 'auto', 'auto']}
                        columns={['auto', 'auto', 'auto', 'auto']}
                        gap="medium"
                        areas={[
                            { name: 'a', start: [0, 0], end: [0, 0] },
                            { name: 'b', start: [0, 1], end: [0, 1] },
                            { name: 'c', start: [1, 1], end: [1, 1] },
                            { name: 'd', start: [1, 2], end: [1, 2] },
                        ]}
                    >
                        <Box gridArea="a" background="light-5" align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" border={{"color":"active-background","size":"medium","side":"all","style":"solid"}} elevation="small" round="medium">
                        <Heading>Customer Service / Support</Heading>
                        <Paragraph size="medium">
                        Support contact form<br/>support@abcd.de<br/>+12 (0) 123 456 78 </Paragraph>
                        </Box>
                        <Box gridArea="b"background="light-2" align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" border={{"color":"active-background","size":"medium","side":"all","style":"solid"}} elevation="small" round="medium">
                        <Heading>Sales</Heading>
                        <Paragraph size="medium">
                        Support contact form<br/>support@abcd.de<br/>+12 (0) 123 456 78 </Paragraph>
                        </Box>
                        <Box gridArea="c"background="light-4" align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" border={{"color":"active-background","size":"medium","side":"all","style":"solid"}} elevation="small" round="medium">

                        <Heading>Marketing / Press</Heading>
                        <Paragraph size="medium">
                        Marketing contact form<br/>marketing@newtron.de </Paragraph> 
                        </Box>
                        <Box gridArea="d"background="light-1" align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" border={{"color":"active-background","size":"medium","side":"all","style":"solid"}} elevation="small" round="medium">

                        <Heading>Locations</Heading>
                        <Paragraph size="medium">
                        India <br/> Germany </Paragraph>
                        </Box>
                    </Grid>
                </Box>


            </Main>
        )
    }
}
