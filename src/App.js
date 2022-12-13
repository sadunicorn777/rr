import React from 'react';
import './App.css';
import WebFont from 'webfontloader';
import { ExpandingPhoto } from './ExpandingPhoto'

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Work Sans']
      }
    });
   }, []);

   const images1 = ["zara"]
   const caption1 = ["This is a screenshot from Zara's website. To view the entire website, head to Zara.com"]
   const a1 = [""]

   const images2 = ["lofi", "lofi2"]
   const caption2 = ["Desktop, tablet, and mobile prototypes of the home page", "Desktop, tablet, and mobile prototypes of the shopping page"]
   const a2 = ["", ""]

   const images3 = ["styleguide"]
   const caption3 = ["Style and branding guide"]
   const a3 = [""]

   const images4 = ["desktop1", "desktop2", "desktop3", "mobile", "tablet"]
   const caption4 = ["Desktop homepage", "Desktop homepage: after link clicked", "Desktop shopping page", "Mobile homepage, mobile homepage after link clicked, mobile shopping page", "Tablet homepage, tablet homepage after link clicked, tablet shopping page"]
   const a4 = [
     "Everything will be stored in a flexbox container, including the background image whose size will occupy the entire screen. Elements will be formatted with absolute positioning to be overlaid on top of one another. The bottom bar will be around 20 or 30 vh and use compartmentalized flexbox positioning to format the words, using the space-between attribute. The top attributes (Zara header and two icons) will be formatted using flexbox space-between.", 
     "The bottom bar is expanded by increasing its height to a greater portion of the screen size. Textual elements are stored using flexbox space-between. The bottom bar will be controlled by a React state so it will know whether it's expanded or not.", 
     "Listings will be stored using flex-wrap to place them into a grid. Each individual listing will be stored using a flexbox column.", 
     "The tablet version is adapted directly from the laptop. Because every element, even the texts, are sized relative to the screen size, the design will be responsive. NOTE: Elements should be sized relative to the screen width specifically, unless they are directly intended to take up a portion of the height. This is because tablet proportions differ from the laptop in the width more so than the height.", 
     "Mobile layout is also adapted from the laptop and tablet. The same rules apply about resizing elements based on the screen width."
  ]

  return (
    <div className="App">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <div style ={{backgroundColor: '#FFB0E2', borderRadius: 40, height: '85vh', width: '80vw', filter: 'drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.15))'}} />
          <div style ={{position: 'absolute', backgroundColor: 'white', borderRadius: 40, height: '85vh', width: '74vw', overflow: 'scroll'}}>

            <div style={{paddingLeft: '4vw', paddingRight: '4vw'}}>

              <div style={{fontSize: '1.1vw', fontFamily: 'Work Sans', paddingTop: '2vw', paddingLeft: '0.2vw'}}>Brown University CSCI 1300</div>
              <div style={{fontSize: '2.5vw', fontFamily: 'Work Sans', paddingTop: '0.2vw'}}>
                Responsive <b>Redesign</b>✏️
              </div>

              <div class="spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>🔧 Assignment Overview</div>

              <div class="m-spacer" />

              <div style={{fontSize: '0.9vw', lineHeight: '1.3vw', fontFamily: 'Work Sans'}}>
                The goal of this assignment was to practice the workflow of <acc>redesigning a simple website</acc>. The process involved <acc>analyzing and identifying flaws</acc> in an existing interface, creating <acc>low-fidelity</acc> and <acc>high-fidelity prototypes</acc> for various screen sizes, and <acc>building a responsive website</acc> based on those prototypes.
              </div>

              <div class="spacer" />
              <div class="spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>🔍 Part 1: Identifying Usability Problems</div>

              <div class="m-spacer" />

              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', height: '30vh'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: 'auto', maxHeight: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Picking a Webpage</div>


                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                    <p>I chose the website of the popular retail fashion company, <pacc>Zara</pacc>. You can experience the website for yourself at <a href="http://zara.com/us">zara.com</a>.</p>

                    
                    <p>I chose Zara's website because it is so difficult to navigate and use that even though I am in love with Zara clothing, I would never buy it from their website. I don't know how, even though that is the purpose of the website. </p>

                      
                  </div>
                </div>
                <ExpandingPhoto 
                  text="Click for a screenshot of Zara's site" 
                  width="17vw"
                  clickedMarginTop="-50vh"
                  source={images1}
                  caption={caption1}
                  annotation={a1}
                />
                </div>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: 'auto', maxHeight: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Finding Problems</div>

                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>

                    
                    <p><i><b>Usability.</b></i> The capability of the software product to be 
 <pacc>understood</pacc>, <pacc>learned</pacc>, <pacc>used</pacc> and <pacc>attractive</pacc> to the 
user, when used under specified conditions.</p>

<div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
<p style={{background: '#FFE7F6'}}>
                    Unmet Expectations
                    </p>
                    Upon entering the site, the user is immediately bombarded with photos of child models. This may conflict with the user's preconceived notion of the site, as typically, clothing sites list retail items on the first page rather than flooding it with visuals. 
                    <p style={{background: '#FFE7F6'}}>
                    Learning Obstacles 
                    </p>
                    The website navigation is counterintuitive. At the bottom of the screen the user is presented links to categories such as "girl", "boy", etc. Instead of actually leading the user to item listings, these links only serve to change which images that are being projected.
                    <p style={{background: '#FFE7F6'}}>
                    Inconsistency 
                    </p>
                    When the user finally figures out how to view item listings (through accessing the main menu by clicking a tiny icon in the top left corner), the website presents listings inconsistently. In some cases, the names of the items are listed below the item. In other cases, they are not. There is no apparent reasoning or pattern. 
                    <p style={{background: '#FFE7F6'}}>
                    Confusing Queues

                    </p>
                    Link titles within the menu in  are confusing or misleading. Examples include "Join Life". There is no telling what this could possibly mean. 
                    <p style={{background: '#FFE7F6'}}>
                    Cryptic Abbreviations 
                      </p>
                      Zara employs some jargon in their menu link titles. Whatever "Zara Srpls" means is unclear to the user. If it means "Surplus", there was definitely room to write that entire word. After clicking this link, the user is lead to a page with shots of models wearing clothing that is presumably Zara. This has nothing to do with a "surplus".

                      <p style={{background: '#FFE7F6'}}>
                    Low Contrast
                      </p>
                      In many cases, the website's text (for example, navigation links or menu links) fall directly on top of an image. The text is always black, and sometimes the images are dark in color. This presents a problem as the text is difficult to read, leading to confusion and unattractiveness.
                  </div>
                  </div>
                </div>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: 'auto', maxHeight: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Accessibility</div>
                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                  <p>
                    <a href="https://wave.webaim.org/">WebAim WAVE</a> was used to detect accessibility problems with the website. Flagged features included: 
                  </p>
                  <p style={{background: '#FFE7F6'}}>
                    Missing alternative text
                  </p>
                  Correct, there are no textual alternatives for images. So, the website cannot be screenread to a visually impaired person.
                  <p style={{background: '#FFE7F6'}}>
                    Low contrast
                  </p>
                  Correct, text blends in with the images in many cases.
                  <p style={{background: '#FFE7F6'}}>
                    Skipped heading levels
                  </p>
                  Correct, there does not seem to be an intermediary heading size between the huge title text and any other text on the website (any other text besides the title is tiny).
                  <p style={{background: '#FFE7F6'}}>
                    Very small text
                  </p>
                  Correct, all text that is not the main heading is miniscule. However, enlarging the website using "Command/Control" + "+" on a keyboard does enlarge the text. 
                </div>
                </div>
              </div>





              






              <div class="spacer" />
              <div class="spacer" />
              <div class="spacer" />
              <div class="spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>🖼 Part 2: Visual Redesign</div>

<div class="m-spacer" />

              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', height: '30vh'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: 'auto', maxHeight: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Low Fidelity Wireframing</div>


                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                    <p>I created low-fidelity wireframes adapted for a mobile screen, tablet screen, and desktop screen. The wireframes seek to amend each of the problems enumerated in the previous section.</p>

                      
                  </div>
                </div>
                <ExpandingPhoto 
                  text="Click to view the Lo-fi prototypes" 
                  width="17vw"
                  clickedMarginTop="-50vh"
                  source={images2}
                  caption={caption2}
                  annotation={a2}
                />
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: 'auto', maxHeight: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Style Guide</div>

                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>

                  <p>Before hi-fi prototyping, I created a visual design style guide in Figma that displays the main colors, typography, and reusable components' different states (buttons on hover, click, etc).</p>

                  

                  </div>
                  
                  </div>

                  <ExpandingPhoto 
                  text="Click to view the Style guide" 
                  width="17vw"
                  clickedMarginTop="-70vh"
                  clickedMarginLeft="-20vw"
                  source={images3}
                  caption={caption3}
                  annotation={a3}
                />
                  
                </div>
                
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: 'auto', maxHeight: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ High Fidelity Prototype</div>
                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                  <p>Using Figma, I then create a total of 3 high-fidelity prototypes of one screen, one for each of the screen sizes (mobile, tablet, desktop). You can visit the actual Figma file <a href="https://www.figma.com/file/6PyikcgtQ8dwi13Bm0ui57/Responsive-Redesign?node-id=0%3A1&t=n1RlCFNppykP9mNd-1">here</a>. </p>
                </div>
                </div>
                <ExpandingPhoto 
                  text="Click to view the Hi-fi prototypes" 
                  width="17vw"
                  clickedMarginTop="-70vh"
                  clickedMarginLeft="-50vw"
                  source={images4}
                  caption={caption4}
                  annotation={a4}
                />
                </div>
              </div>






              <div class="spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>📲 Part 3: Responsive Redesign</div>

              <div style={{fontSize: '0.9vw', lineHeight: '1.3vw', fontFamily: 'Work Sans'}}>
              <div class="m-spacer" />
                This is the final website in action! Watch the screen recording to see how it behaves when resized. To vist the website yourself you can check it out <a href="http://sadunicorn777.github.io/zara2">here</a>. 
                <div class="m-spacer" />
                To navigate this coded protoype, you may click the <acc>Woman</acc> button to view the categories under "Woman", <acc>New Sensuality</acc> to view listings, the double arrow icon to collapse the bottom menu, and the <acc>Home</acc> button to return to the homepage.
              </div>

              <div class="m-spacer" />

              <video style={{width: "50vw"}} autoplay="true" controls="controls" src={require("./images/demo.mov")}></video>

              <div class="spacer" />
              <div class="spacer" />

              {/* ALL WHITE BOX CONTENTS BEFORE HERE */}

            </div>

          </div>
        </div>

    </div>
  );
}

export default App;
