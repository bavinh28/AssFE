import React from 'react'

const Acction = () => {
  return (
    <section id="one" className="wrapper style1">
      {/* <div className="inner">
        <article className="feature left rounded">
          <span className="image mx-5"><img src="https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></span>
          <div className="content">
            <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
            <ul className="actions">
              <li>
                <a href="#" className="button alt">More</a>
              </li>
            </ul>
          </div>
        </article>
        <article className="feature right rounded">
          <span className="image mx-5"><img src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></span>
          <div className="content">
            <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
            <ul className="actions">
              <li>
                <a href="#" className="button alt">More</a>
              </li>
            </ul>
          </div>
        </article>
      </div> */}
      <div className="flex flex-wrap md items-center h-screen">
        <div className="bg-white w-full md:w-1/2 h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-16">Tokyo</h1>
            {/* country region island */}
            <div className="flex mt-16 font-light text-gray-500">
              <div className="pr-4">
                <span className="uppercase">Country</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">Japan</p>
              </div>
              <div className="pr-4">
                <span className="uppercase">Region</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">Kanto</p>
              </div>
              <div className="pr-4">
                <span className="uppercase">island</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">Honshu</p>
              </div>
            </div>
            {/* description */}
            <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
              Tokyo, Japan’s busy capital, mixes the ultramodern and the
              traditional, from neon-lit skyscrapers to historic temples. The
              opulent Meiji Shinto Shrine is known for its towering gate and
              surrounding woods. The Imperial Palace sits amid large public
              gardens
      </div>
            <button className="uppercase mt-5 text-sm font-semibold hover:underline">
              read more
      </button>
          </div>
        </div>
        <div className="bg-red-600 w-full md:w-1/2 h-screen">
          <img src="https://source.unsplash.com/7H77FWkK_x4/1600x900" className="h-screen w-full" alt="" />
        </div>
      </div>

    </section>

  )
}

export default Acction
