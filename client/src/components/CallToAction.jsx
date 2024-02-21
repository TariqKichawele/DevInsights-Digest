import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <>
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2 className="text-2xl">
                    Want to learn more about Javascript?
                </h2>
                <p className="text-gray-500 my-2">
                    Checkout these resources to learn more about Javascript.
                </p>
                <Button gradientDuoTone={'purpleToPink'} className="rounded-tl-xl rounded-bl-none">
                    <a href="https://www.100jsprojects.com" rel="noopener noreferrer">
                        100 Javascript Projects
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
            </div>
        </div>

        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="p-7 flex-1">
                <img src="https://lms.barcelonactiva.cat//img/w3_css-ar210.jpg" />
            </div>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className="text-2xl">
                    Want to learn more about CSS?
                </h2>
                <p className="text-gray-500 my-2">
                    Checkout these resources to learn more about CSS.
                </p>
                <Button gradientDuoTone={'purpleToPink'} className="rounded-tl-xl rounded-bl-none">
                    <a href="https://www.codecademy.com/projects/language/html-css" rel="noopener noreferrer">
                        CSS Projects
                    </a>
                </Button>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2 className="text-2xl">
                    Want to learn more about HTML?
                </h2>
                <p className="text-gray-500 my-2">
                    Checkout these resources to learn more about HTML.
                </p>
                <Button gradientDuoTone={'purpleToPink'} className="rounded-tl-xl rounded-bl-none">
                    <a href="https://www.codecademy.com/projects/language/html-css" rel="noopener noreferrer">
                        HTML Projects
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.png" />
            </div>
        </div>


    </>
  )
}
