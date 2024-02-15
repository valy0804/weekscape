const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NDZ8fG9jZWFuJTIwaXNsYW5kc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="A person swimming in the ocean with a mask on"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1702598673948-490be772eb8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHNlYSUyMGlzbGFuZCUyMGhvdGVsfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1663052721187-f5a65a76d6b0?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNlYSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHNlYSUyMGlzbGFuZCUyMGhvdGVsfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
