import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
// import style from "./NavbarDrawer.module.css"
// import {AuthContext} from '../../ContextAdmin/AdminAuthContext';

const Navbar_res = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    // const val=React.useContext(AuthContext)
    // const logout=(()=>{
    //     val.handleAuth();
    // })
    return (
        <>
            <Button ref={btnRef} style={{ color: "#0F346C" }} onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody style={{ marginTop: "3rem" }}>
                       <Link to="/sunglasses">
                            <div >
                                <button >
                               SUNGLASSES
                                </button>
                            </div>
                       </Link>
                        <hr />
                        <hr />
<Link to="/computerglasses">
                            <div >
                                <button >
                               COMPUTERGLASSES
                                </button>
                            </div>
                      </Link>
                        <hr />
                        <hr />
                        <Link to="/eyeglasses">
                            <div >
                                <button >
                               EYEGLASSES
                                </button>
                            </div>
                            </Link>
                            <hr />
                        <hr />

                        <Link to="/kidsglasses">
                            <div >
                                <button >
                               KIDSGLASSES
                                </button>
                            </div>
                      </Link>
                        <hr />
                        <hr />
                        <Link to="/travelglasses">
                        <div >
                                <button >
                               TRAVELGLASSES
                                </button>
                            </div>
                      </Link>
                        <hr />
                        <hr />
                        
                        
                    </DrawerBody>

                    <DrawerFooter>
                    <Button style={{ backgroundColor: "#0F346C", color: "white" , marginLeft:"3px"}}>LOGIN</Button>
                        <Button style={{ backgroundColor: "#0F346C", color: "white" , marginLeft:"3px"}}>SIGNUP</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar_res