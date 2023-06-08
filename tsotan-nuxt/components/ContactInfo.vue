<template>
    <div class="contact-area pt-100 pb-100">
        <div class="container">
            <div class="contact-map mb-10">
                <iframe width="942" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=ulaanbaatar tsotan textile&t=&z=18&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

            <div class="custom-row-2">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="contact-info-wrap">
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>+976 93300991</p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-globe"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p><a href="#">info@shined.mn</a></p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>Төмөр замын 222-р байр,</p>
                                <p> Замчид гудамж, Ulaanbaatar 16051,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 col-12">
                    <div class="contact-form">
                        <div class="contact-title mb-30">
                            <h2>Get In Touch</h2>
                        </div>
                        <form id="ProductMail">
                            <div class="mb-3">
                            <label for="ProdectOrder" class="form-label">Санал хүсэлт</label>
                            <input type="text" class="form-control" id="ProdectOrder" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="PhoneNumber" class="form-label">Утасны дугаар</label>
                                <input type="tel" class="form-control" id="PhoneNumber" aria-describedby="emailHelp">
                            </div>
                            <button type="submit" class="btn btn-primary" onclick="submitForm()" value="Submit">Илгээх</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>