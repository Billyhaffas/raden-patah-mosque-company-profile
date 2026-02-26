function renderNavbar() {
    const navbar = `
    <nav class="bg-[#EEF0FB] fixed w-full z-10">
    <div class="mx-[100px]">
      <div class="flex items-center justify-between h-16">
          <div class="w-full px-4"> 
            <nav class="flex items-center justify-start"> 
              <a href="homepage.html" class="block">
                <img src="../images/MRP logo.svg" class="h-12 w-auto" alt="Masjid Raden Patah Logo">
              </a>
              <div class="ml-4 flex items-center gap-x-6"> 
                <a href="homepage.html" class="text-[#19305D] hover:text-blue-1000 " >Home</a>
                <a href="service.html" class="text-[#19305D] hover:text-blue-1000">Layanan</a>
                <a href="portfolio.html" class="text-[#19305D] hover:text-blue-1000">Testimoni</a>
                <a href="contact_us.html" class="text-[#19305D] hover:text-blue-1000">Hubungi Kami</a>
                 <a href="about_us.html" class="text-[#19305D] hover:text-blue-1000">Tentang Kami</a>
              </div>
            </nav>
        </div>
        <div class="flex items-center space-x-2 cursor-pointer">
          <img src="https://cdn.antaranews.com/cache/1200x800/2021/08/15/WhatsApp-Image-2021-08-15-at-21.36.jpg"
            class="h-8 w-8 rounded-full" alt="Profile">

          <span class="text-[#19305D] font-medium">Profile</span>
        </div>
      </div>
    </div>
  </nav>`;
    document.getElementById('navbar').innerHTML = navbar;
}
renderNavbar();


function renderFooter() {
    const footerHTML = `
    <footer class="relative bg-gradient-to-r from-[#213A73] to-[#1B2F5E] text-white pt-20 pb-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="md:col-span-2 flex gap-6">
        <div class="">
  <img src="../images/wayang raden patah.svg" alt="">
</div>
        <div>
          <h2 class="text-3xl font-bold mb-4 tracking-wide">
            Masjid Raden Patah
          </h2>
          <p class="text-sm text-gray-200 leading-relaxed max-w-md">
            Masjid Raden Patah merupakan masjid kampus Universitas Brawijaya,
            memiliki tiga ruangan mulai dari ruangan utama, ruangan basement,
            dan ruangan kajian. Untuk menggunakan ruangan tersebut terdapat alur
            peminjaman yang dapat dilakukan secara digital melalui website.
          </p>
        </div>
      </div>

      <!-- Fitur -->
      <div>
        <h3 class="text-lg font-semibold mb-5">Fitur</h3>
        <ul class="space-y-3 text-gray-200">
          <li><a href="homepage.html" class="hover:text-yellow-400 transition">Beranda</a></li>
          <li><a href="service.html" class="hover:text-yellow-400 transition">Layanan</a></li>
          <li><a href="portfolio" class="hover:text-yellow-400 transition">Testimoni</a></li>
          <li><a href="contact_us" class="hover:text-yellow-400 transition">Hubungi Kami</a></li>
          <li><a href="contact_us" class="hover:text-yellow-400 transition">Tentang Kami</a></li>
        </ul>
      </div>

      <!-- Social + Kontak -->
      <div class="grid grid-cols-2 gap-10">

        <div>
          <h3 class="text-lg font-semibold mb-5">Social Media</h3>
          <ul class="space-y-3 text-gray-200">
            <li><a href="#" class="hover:text-yellow-400 transition">Facebook</a></li>
            <li><a href="#" class="hover:text-yellow-400 transition">Instagram</a></li>
            <li><a href="#" class="hover:text-yellow-400 transition">Youtube</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-5">Kontak</h3>
          <ul class="space-y-3 text-gray-200">
            <li><a href="#" class="hover:text-yellow-400 transition">Whatsapp</a></li>
            <li><a href="#" class="hover:text-yellow-400 transition">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  `;
    document.getElementById('footer').innerHTML = footerHTML;


}
renderFooter();

