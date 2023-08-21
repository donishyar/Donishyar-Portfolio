import React from 'react'

const Graphic = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">
        Graphic Design
    </h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Adobe Illustrator</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Adobe PhotoShop</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Adobe AfterEffects</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">LOGO Design</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Typography</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Color theory</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Graphic