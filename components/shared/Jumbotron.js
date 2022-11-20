import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react'

export default function Jumbotron(){
    return(
        <Grid xs={12} sm={6} alignItems="center">
        <Col css={{"width" : "100%"}}>
          <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Lorem Ipsum</Text>
          {/* <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>of The Future</Text> */}
          <Button size="md" shadow color="gradient" css={{"width":"100%", "marginTop":"10px"}}> Join For Free </Button>
        </Col>
      </Grid>
    )
}