import React from 'react'
import SearchBar from '../components/common/SearchBar'
import Footer from '../components/common/Footer'



export default function LandingPage() {
  return (
    <div>
      <header>
        <div className="upper">
          <img src=""
            alt="" srcset="" />
          <h2>
            Discover the perfect course for you
          </h2>
        </div>
        <div className="lower">
          <SearchBar />
          <img src="" alt="" />
        </div>
      </header>
      <section>
        <div className="sectionTitle">
          How it work
          <div className="cards">
            <div className="card">
              <img src="" alt="" />
              <h4>Step 1</h4>
              <p>Enter your search query to find courses. Explore and learn at your own pace.</p>
            </div>
            <div className="card">
              <img src="" alt="" />
              <h4>Step 2</h4>
              <p>Choose a course and dive into a world of knowledge. Start your learning journey today.</p>
            </div>

            <div className="card">
              <img src="" alt="" />
              <h4>Step 3</h4>
              <p>Enroll in a course and begin your learning experience. Expand your horizons with LearnHub.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="cards">
          <div className="card">
            <div className="left">
              <img src="" alt="" srcset="" />
            </div>
            <div className="right">
              <h2>As a student</h2>
              <h4>Learn and grow by taking courses online. All you need is a desire to learn.</h4>
              <button>Learn with us</button>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img src="" alt="" srcset="" />
            </div>
            <div className="right">
              <h2>As an instructor</h2>
              <h4>Teach and share your knowledge with a global audience. Empower learners with your expertise.</h4>
              <button>Teach with us</button>
            </div>
          </div>

        </div>
      </section>
    <section className="cta">
      <div className="ctatitle">
        <h2>Access our platform</h2>
        <div className="ctaCard">
          <div className="left">
            <h2>Learn effortlessly!</h2>
            <p>Explore a world of knowledge with LearnHub. Access a wide range of courses from various disciplines.</p>
            <button>
            Access
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}
