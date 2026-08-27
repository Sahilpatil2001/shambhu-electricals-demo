sed -i -e "/import AboutUs from '.\/pages\/AboutUs';/a\import ContactUs from './pages/ContactUs';" src/App.tsx
sed -i -e '/<Route path="\/about" element={<AboutUs \/>} \/>/a\              <Route path="/contact" element={<ContactUs />} />' src/App.tsx
sed -i -e "s/{ path: '\/#contact', label: t('nav.contact') }/{ path: '\/contact', label: t('nav.contact') }/g" src/components/Header.tsx
