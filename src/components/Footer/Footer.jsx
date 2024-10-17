import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className="py-28 bg-[#f7f7f7]">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    {/* First Section */}
                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold">The Coding Journey</h1>
                        <p className="text-dark2">
                            TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your career as a developer.
                        </p>
                    </div>
                    {/* Second Grid */}
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Courses</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-lg">
                                    <li className="cursor-pointer hover:text-secondary">Web Development</li>
                                    <li className="cursor-pointer hover:text-secondary">Software Development
                                    </li>
                                    <li className="cursor-pointer hover:text-secondary">Apps Development</li>
                                    <li className="cursor-pointer hover:text-secondary">Elearning</li>
                                </ul>
                            </div>
                        </div>

                        {/* links section */}
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Links</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-lg">
                                    <li className="cursor-pointer hover:text-secondary">Home</li>
                                    <li className="cursor-pointer hover:text-secondary">Services</li>
                                    <li className="cursor-pointer hover:text-secondary">About</li>
                                    <li className="cursor-pointer hover:text-secondary">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Third Grid */}
                    <div className="space-y-2 max-w-[300px]">
                        <h1 className="text-2xl font-bold">Get In Touch</h1>
                        <div className="flex items-center">
                            <input type="text" placeholder="Enter your email" className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2" />
                            <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
                        </div>

                        {/* socials */}
                        <div className="flex space-x-6 py-3">
                            <a href="#">
                                <FaWhatsapp className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                            <a href="#">
                                <FaInstagram className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                            <a href="#">
                                <TbWorldWww className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                            <a href="#">
                                <FaWhatsapp className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>

                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer