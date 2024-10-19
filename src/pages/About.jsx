/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          {/* <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 h-48 object-cover rounded-full mb-6"
          /> */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {t("aboutUs.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-right">
          {t("aboutUs.content")}
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {t("aboutUs.history")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-right">
          "تأسست الشركة في بداية التسعينات في عام 1994 باسم مكتب الساير للخدمات الهندسية للقيام بأعمال تجهيز وتأهيل منظومات الطاقة الكهربائية. في عام 1999 تم توسيع أعمال المكتب للقيام بأعمال المقاولات بالإضافة إلى تجهيز وتنفيذ وتصميم. في عام 2009 تم تكييف الوضع القانوني للمكتب ليصبح شركة الساير للخدمات الهندسية. في عام 2014 تم تغيير اسم الشركة ليضاف نشاط المقاولات ليصبح اسم الشركة شركة الساير للتجارة العامة والمقاولات والخدمات الهندسية. وتعتبر الشركة من الشركات المهمة في مجال شركات قطاع الطاقة (النفط والكهرباء)."
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6  text-center">
        {t("aboutUs.ourServices")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">

          <ul class="list-disc text-center md:text-right">
            <li>أعمال تأهيل في معمل سمنت سنجار 2000</li>
            <li>تصميم وتنفيذ معمل الكحول الطبي عام 2000 في معمل سكر الموصل</li>
            <li>تجهيز اجهزة حقلية لمعمل سمنت القائم</li>
            <li>نصب وتجهيز أجهزة السيطرة والقياس الحقلية لمرجل الوحدة الثانية في محطة كهرباء المسيب 1999</li>
            <li>تجهيز وصيانة ضاغطات هواء الجاف لمحطة كهرباء جنوب بغداد عام 2003</li>
            <li>تجهيز معدات ومواد اولية لصالح وزارة الصناعة لصالح شركة الفارس العامة</li>
            <li>تجهيز كابسات ومضخات دفع الوقود لمصفى الصينية المتنقل عام 2001</li>
            <li>تنصيب وحدة معالجة المياه المالحة لهيئة المناطق الحرة في خور الزبير</li>
            <li>تجهيز أنابيب البويلر لمحطة كهرباء جنوب بغداد والدورة الحرارية</li>
            <li>تجهيز ملفات بلاتين السوبر هيتر لمحطة كهرباء الناصرية عام 2014</li>
            <li>تجهيز مضخات متنوعة لمحطة كهرباء الناصرية عام 2014</li>
            <li>تجهيز بليت كورتن ستيل لإنتاج الطاقة في البصرة عام 2013</li>
            <li>تجهيز بليت مختلف القياسات للتأهيل الورش الفنية</li>
            <li>تجهيز أنابيب لشركة نفط الوسط عام 2016 بطول 1400 متر</li>
            <li>تجهيز أنابيب وملاحقاتها لشركة نفط الوسط بطول 6000 متر مختلفة القياسات</li>
          </ul>
        </p>
      </section>

      {/* Promise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {t("aboutUs.ourGoals")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-right">
        {t("aboutUs.Goals")}
        </p>
      </section>
    </div>
  );
};

export default About;
