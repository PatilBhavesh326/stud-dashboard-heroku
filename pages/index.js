import { Container, Navbar, Text, Button, Grid, Dropdown } from '@nextui-org/react'
import Card from '../components/shared/Card'
import Employers from '../components/shared/Employers'
import Footer from '../components/shared/Footer'
import Jumbotron from '../components/shared/Jumbotron'
import Services from '../components/shared/services'
import Subscribe from '../components/shared/Subscribe'

 const Home = () => {
  return (
    <Container>
      {/* Navigation bar */}
      <Navbar isBordered variant={"static"}>
        <Navbar.Brand>
          <Text b color='inherit'>
              Brand Name
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Link href='#about' offset={50} duration={500} light>
							About
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown>
              <Dropdown.Button auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}>Students</Dropdown.Button>
              <Dropdown.Menu css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}>
                <Dropdown.Item key="finder">Admissions Hub Program Finder</Dropdown.Item>
                <Dropdown.Item key="expert">Admissions Hub Expert</Dropdown.Item>
                <Dropdown.Item key="connect">Admissions Hub Connect</Dropdown.Item>
                <Dropdown.Item key="events">Admissions Hub Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href='/#employers' offset={50} duration={500} light>Employers</Navbar.Link>
          <Navbar.Link href='#services' offset={50} duration={500} light>Schools</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link href='/login'>Login</Navbar.Link>
            <Navbar.Link href='/register'>
              <Button auto flat >
                Register
              </Button>
            </Navbar.Link>
        </Navbar.Content>
      </Navbar>

      {/* {Jumbotron} */}
      <Grid.Container justify='center' css={{"height" : "500px" }}>
          <Jumbotron />
      </Grid.Container>

      {/* Displaying Pricing Card */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
            <Card />
        </Grid>  
        <Grid xs={12} sm={4}>
            <Card />
        </Grid>
        <Grid xs={12} sm={4}>
            <Card />
        </Grid>
        <Grid>
          <Services />
          <Employers />
          <Subscribe />
        </Grid>     
      </Grid.Container>
      
      {/* Footer*/}
      <Grid.Container>
        <Grid xs={12} sm={12}>
        <Footer />
        </Grid>
      </Grid.Container>

    </Container>
    
  )
}

export default Home
