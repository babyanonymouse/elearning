import { FaBookReader } from "react-icons/fa"
import BannerPNG from "../../assets/education.png"
import { FadeUp } from "../Hero/Hero"
import { motion } from "framer-motion"
import { GrUserExpert } from "react-icons/gr"
import { MdOutlineAccessTime } from "react-icons/md"

const Banner = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                {/* Banner Image */}
                <div className="flex justify-center items-center">
                    <motion.img initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5, ease: "easeInOut" }}
                        src={BannerPNG} alt="banner-img" className="w-[350px] md:max-w[450px] object-cover drop-shadow" />
                </div>
                {/* Banner Text */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-12">
                        <motion.h1 initial={{ opacity: 0, scale: .5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .5 }}
                            className="text-3xl font-bold md:text-4xl !leading-snug">The World&apos;s Leading Online Learning Platform</motion.h1>

                        <div className="flex flex-col gap-6">
                            <motion.div variants={FadeUp(.2)} initial="initial" whileInView={"animate"} viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                                <FaBookReader className="text-2xl" />
                                <p className="text-lg">10,000+ Courses</p>
                            </motion.div>
                            <motion.div variants={FadeUp(.3)} initial="initial" whileInView={"animate"} viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                                <GrUserExpert className="text-2xl" />
                                <p className="text-lg">Expert Instructions</p>
                            </motion.div>
                            <motion.div variants={FadeUp(.5)} initial="initial" whileInView={"animate"} viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                                <MdOutlineAccessTime className="text-2xl" />
                                <p className="text-lg">Lifetime Access</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner