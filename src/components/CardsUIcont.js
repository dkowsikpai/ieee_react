import React, { Component } from 'react'
import CARDS from './cardsUI'
import Ab from '../static/images/execom/Abhijith.jpg'
import An from '../static/images/execom/Anna.jpg'
import Ar from '../static/images/execom/aravind.jpg'
import Gp from '../static/images/execom/Gopikrishna.jpg'
import Hw from '../static/images/execom/HarshaSWarrier.jpg'
import Le from '../static/images/execom/Leah.jpg'
import Lm from '../static/images/execom/Leshmi.jpg'
import Na from '../static/images/execom/Nandana.jpg'
import Ra from '../static/images/execom/Rahul.jpg'
import Ram from '../static/images/execom/Ramanathan.jpg'
import Sh from '../static/images/execom/Shaharad.jpg'
import Sw from '../static/images/execom/Swetha.jpg'
import Vs from '../static/images/execom/Vishnu.jpg'
import Yo from '../static/images/execom/Yohan.jpg'
import Pa from '../static/images/execom/Paul.jpg'
import Ca from '../static/images/execom/calvin.jpg'
import Vi from '../static/images/execom/Vaisakh.jpg'
import Si from '../static/images/execom/Sivanadh.jpg'
import Av from '../static/images/execom/AbhiVal.jpg'
import Sr from '../static/images/execom/Sruthi.jpg'
import Ko from '../static/images/execom/Kowsik.jpg'

//Vishnu S - Chairman vishnus@ieee.org 
// Anna Rose MB- Secretary - annarosemb1729@gmail.com 
// Sivavandh KS- Treasurer - sivakarolil@gmail.com 
// Harsha S Warrier- Vice-Chair/ CS Chair - harshaswarrier@ieee.org 

// Yohan Sunil Tharakan- LINK Representative/PRO/Publicist- yohansuniltharakan001@gmail.com 
// Abhijith Valsan-Electronic Communications Coordinator abhijithvalsan2011@gmail.com 
// Shaharadh S-PES Chair/Chief Financial Officer shaharadhs@gmail.com 
// S Gopikrishna-Membership Development Chair- gopi.bhavans@gmail.com 
// N S Ramanathan- Chief Editor/SIGHT Secretary nellayiramanathan@gmail.com 
// Paul B Kalarikkal- Photography Lead/PES Secretary paulbkalarikkal@gmail.com 
// Swetha Miriam George -WIE Chair swetamiriamgeorge@gmail.com 
// Nandana- WIE Vice Chair  nandanavn99@gmail.com 
// Leah Liz Paul- WIE Secretary leahpaul267@gmail.com 
// Lakshmy V- SIGHT Chair  lakshmyv123@gmail.com 
// Vaisakh Mohan - RAS Chair vaisakhmohanbabu123@gmail.com  
// Aravind I - RAS Secretary aravindwarrier2000@gmail.com 
// Calvin -CS Secretary calvinwilson2017@gmail.com 
// Rahul Subramanian- PELS Chair rahulsazhikkal@gmail.com 
// Abhijith -IAS Chair abhijithcs07@gmail.com
class CardsUIcont extends Component {
    render() {
        return (
            <div className='container justify-content-center'>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Vs} gmail={"vishnus@ieee.org"} name={'Vishnu S'} status={'Chairman'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Si} gmail={"sivakarolil@gmail.com"} name={'Sivanandh KS'} status={'Treasurer'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={An} gmail={"annarosemb1729@gmail.com"} name={'Anna Rose MB'} status={'Secretary'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Hw} gmail={"harshaswarrier@ieee.org"} name={'Harsha S Warrier'} status={'Vice-Chair / CS Chair'} />
                    </div>
                    <div className="col-lg-4 ">
                        <CARDS image={Ram} gmail={"nellayiramanathan@gmail.com"} name={'N S Ramanathan'} status={'Chief Editor / SIGHT Secretary'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Le} gmail={"leahpaul267@gmail.com"} name={'Leah Liz Paul'} status={'WIE Secretary'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Sh} gmail={"shaharadhs@gmail.com"} name={'Shaharadh S'} status={'PES Chair / Chief Financial Planning Officer'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Na} gmail={"nandanavn99@gmail.com "} name={'Nandana'} status={'WIE Vice Chair'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Ra} gmail={"rahulsazhikkal@gmail.com"} name={'Rahul Subramanian'} status={'PELS Chair'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Ab} gmail={"abhijithcs07@gmail.com"} name={'Abhijith'} status={'IAS Chair'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Sw} gmail={"swetamiriamgeorge@gmail.com"} name={'Swetha Miriam George'} status={'WIE Chair'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Ar} gmail={"aravindwarrier2000@gmail.com"} name={'Aravind I'} status={'RAS Secretary'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Gp} gmail={"gopi.bhavans@gmail.com"} name={'S Gopikrishna'} status={'Membership Development Chair'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Ko} gmail={"dkowsikpai@gmail.com"} name={'Kowsik Nandagopan D'} status={'Chief Webmaster'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Yo} gmail={"yohansuniltharakan001@gmail.com"} name={'Yohan Sunil Tharakan'} status={'LINK Representative / PRO / Publicist'} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Pa} gmail={"paulbkalarikkal@gmail.com"} name={'Paul B Kalarikkal'} status={'Photography Lead / PES Secretary'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Ca} gmail={"calvinwilson2017@gmail.com"} name={'Calvin Wilson'} status={'CS Secretary / Jt. Webmaster'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Vi} gmail={"vaisakhmohanbabu123@gmail.com"} name={'Vaisakh Mohan'} status={'RAS Chair'} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <CARDS image={Av} gmail={"abhijithvalsan2011@gmail.com"} name={'Abhijith Valsan'} status={'Electronic Communications Coordinator'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Lm} gmail={"lakshmyv123@gmail.com"} name={'Lakshmy V'} status={'SIGHT Chair'} />
                    </div>
                    <div className="col-lg-4">
                        <CARDS image={Sr} gmail={"sruthika2310@gmail.com"} name={'Sruthi K Anandan'} status={'Joint Secretary / Membership development Vice Chair'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsUIcont
