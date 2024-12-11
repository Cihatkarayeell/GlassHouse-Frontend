const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const app = {};
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};


// PARTIALS
@@include('partial/header.js') 
@@include('partial/watermark.js')
 
// UTILS
@@include('util/fade-out.js')
@@include('util/smooth-scroll.js')
@@include('util/replace-broken-image.js')

document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	@@include('partial/format-tel-link.js')
	@@include('partial/external-link-norefer.js')
	@@include('partial/protect-image.js')
	@@include('partial/customer-sliders.js')
	@@include('partial/references-sliders.js')
	@@include('partial/services.js')
	@@include('partial/form-check.js')
	@@include('partial/video-section.js')
	@@include('partial/history-slider.js')
	@@include('partial/contact-info-slider.js')
	@@include('partial/counter.js')
	@@include('partial/nested-slider.js')
	@@include('partial/pdf-slider.js')
	@@include('partial/tab-section-scroll.js')
	@@include('partial/services-slider.js')
	@@include('partial/success-slider.js')
	@@include('partial/solutions.js')
	@@include('partial/features-slider.js')
	@@include('partial/form.js')
	@@include('partial/moving.js')
	@@include('partial/more-button.js')
	@@include('partial/video-tab.js')
	@@include('partial/info-tabs.js')
	@@include('partial/gallery.js')
	@@include('partial/other-news-slider.js')
	@@include('partial/announcements-modal.js')
	@@include('partial/letters-btn.js')
	@@include('partial/data-centre.js')
	
	/*@@include('partial/responsive-table.js') */
});
 

@@include('partial/init.js') 
