import fs from 'node:fs/promises';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const OUT = '/Users/majedhmoud/Developer/B4F-Cohort8/deliverables/Dr-Robot-Startup-Arabic-RTL-Corrected.pptx';
const DIR = '/Users/majedhmoud/Developer/B4F-Cohort8/.tmp_dr_robot';
const logo = await fs.readFile(`${DIR}/logo.jpg`);
const navy = '#123E67', blue = '#176B9D', sky = '#EAF4F9', ink = '#102A43', muted = '#5B7183', white = '#FFFFFF', gold = '#E9B949';
const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } });

function box(slide, x, y, w, h, fill, radius = 'rounded-2xl', line = 'none') {
  const cfg={ geometry: radius==='none' ? 'rect' : 'roundRect', position: { left:x, top:y, width:w, height:h }, fill, line:{ style:'solid', fill:line, width: line==='none'?0:1 } };
  if (radius !== 'none') cfg.borderRadius=radius;
  return slide.shapes.add(cfg);
}
function text(slide, value, x, y, w, h, size, color=ink, bold=false, align='right') {
  const s=slide.shapes.add({ geometry:'textbox', position:{left:x,top:y,width:w,height:h}, fill:'none', line:{style:'solid',fill:'none',width:0} });
  s.text=value;
  s.text.style={fontSize:size,fontFace:'Arial',color,bold,alignment:align,verticalAlignment:'middle',marginLeft:0,marginRight:0,marginTop:0,marginBottom:0}; return s;
}
function title(slide, value, kicker) {
  text(slide, kicker, 74, 55, 1132, 28, 15, blue, true, 'right');
  text(slide, value, 74, 83, 1132, 68, 40, navy, true, 'right');
  const ln=slide.shapes.add({geometry:'rect',position:{left:1070,top:154,width:136,height:5},fill:gold,line:{style:'solid',fill:gold,width:0}});
}
function footer(slide, n) { text(slide, `Dr. Robot  |  ${n} / 8`, 74, 670, 1132, 20, 12, muted, false, 'left'); }
function bullet(slide, label, desc, y) {
  box(slide, 1015, y+7, 15, 15, gold, 'rounded-full');
  text(slide, label, 300, y, 690, 34, 24, navy, true);
  if (desc) text(slide, desc, 300, y+35, 690, 31, 18, muted, false);
}
function newSlide(){ const s=deck.slides.add(); s.background.fill=white; return s; }

// 1 — cover
{ const s=newSlide();
  box(s,0,0,470,720,navy,'none'); box(s,0,0,470,720,navy,'none');
  s.images.add({blob:logo,contentType:'image/jpeg',alt:'شعار Dr. Robot',fit:'contain',position:{left:88,top:151,width:295,height:295}});
  text(s,'Dr. Robot',526,157,650,72,56,navy,true);
  text(s,'نبرمج المهارة، ونصنع الفرصة.',526,241,650,55,32,blue,true);
  text(s,'مركز تدريبي وخدمات برمجية ينقل الطموح إلى مسار مهني واضح.',526,323,600,75,24,muted,false);
  text(s,'عرض مشروع تدريبي',526,521,620,28,16,blue,true);
  text(s,'سلمية  |  2026',526,554,620,24,16,muted,false);
}
// 2 — problem
{ const s=newSlide(); title(s,'فجوة بين الطموح وسوق العمل','المشكلة');
  text(s,'يمتلك كثير من الشباب اهتمامًا حقيقيًا بالبرمجة، لكنهم يفتقدون التدريب العملي والاتجاه المهني الواضح.',244,210,792,90,31,ink,true,'center');
  box(s,122,356,1036,142,sky); text(s,'في سلمية: كفاءات برمجية محدودة، وفرص محلية قليلة، وهجرة للمهارات خارج المدينة.',166,385,948,70,28,navy,true,'center');
  text(s,'النتيجة: طاقات واعدة بلا مسار مهني فعّال.',244,551,792,34,23,muted,false,'center'); footer(s,2);
}
// 3 solution
{ const s=newSlide(); title(s,'من التعلّم إلى التنفيذ','الحل');
  text(s,'يجمع مشروعنا بين التدريب المتخصص والعمل الحقيقي ضمن بيئة واحدة.',154,187,972,44,28,ink,true,'center');
  box(s,700,275,440,245,sky); box(s,140,275,440,245,'#F5F8FA');
  text(s,'مركز تدريبي',758,313,324,38,29,navy,true,'center'); text(s,'مسارات عملية في البرمجة والتصميم وتطوير الويب.',744,371,352,75,22,muted,false,'center');
  text(s,'مكاتب خدمات برمجية',188,313,344,38,29,navy,true,'center'); text(s,'فريق ينفذ مشاريع للعملاء محليًا وعن بُعد.',184,371,352,75,22,muted,false,'center');
  text(s,'تدريب + ممارسة + فرص عمل',210,571,860,44,28,blue,true,'center'); footer(s,3);
}
// 4 value-benefits
{ const s=newSlide(); title(s,'قيمة تتجاوز انتهاء الدورة','القيمة المضافة والمزايا');
  bullet(s,'متابعة بعد التدريب','إرشاد مستمر يساعد المتدرب على تطوير مهارته واتخاذ خطواته التالية.',208);
  bullet(s,'تجربة عملية حقيقية','مشاريع تطبيقية تُقرب المتدرب من متطلبات العمل الفعلية.',322);
  bullet(s,'فرص داخل المدينة وخارجها','العمل عن بُعد يوسّع السوق المتاح للكفاءات المحلية.',436);
  box(s,150,572,980,58,navy); text(s,'لماذا مشروعنا؟ لأنه يبني كفاءة قابلة للعمل، لا معرفة نظرية فقط.',181,583,918,35,22,white,true,'center'); footer(s,4);
}
//5 audience
{ const s=newSlide(); title(s,'نبدأ بمن يملك الاستعداد للتطوّر','الفئة المستهدفة');
  text(s,'فئة مركّزة تجمع بين الخلفية الأكاديمية والدافع المهني.',172,186,936,38,27,muted,false,'center');
  box(s,735,284,385,185,sky); box(s,448,284,245,185,'#F5F8FA'); box(s,160,284,245,185,'#F5F8FA');
  text(s,'طلاب السنوات الأخيرة',772,315,311,60,26,navy,true,'center'); text(s,'الهندسة المعلوماتية والتخصصات القريبة',768,383,319,45,18,muted,false,'center');
  text(s,'الخريجون',473,326,195,40,26,navy,true,'center'); text(s,'الباحثون عن بداية مهنية',468,389,205,40,17,muted,false,'center');
  text(s,'المهتمون بالمجال',178,326,210,40,24,navy,true,'center'); text(s,'مع خبرة أولية أو شغف بالتعلّم',172,389,222,40,17,muted,false,'center');
  text(s,'الأولوية: من يريد تحويل اهتمامه التقني إلى فرصة عمل.',200,558,880,36,25,blue,true,'center'); footer(s,5);
}
//6 reach
{ const s=newSlide(); title(s,'نصل إليهم حيث يتواصلون ويقررون','الوصول إلى الجمهور');
  text(s,'تسويق رقمي محلي مدعوم بشراكات موثوقة في المنطقة.',172,185,936,38,27,muted,false,'center');
  box(s,773,290,350,194,sky); box(s,155,290,510,194,'#F5F8FA');
  text(s,'منصات التواصل الاجتماعي',805,328,286,38,26,navy,true,'center'); text(s,'إعلانات ومحتوى يعرّف بالمسارات التدريبية والقصص العملية.',803,386,290,62,19,muted,false,'center');
  text(s,'تشبيك وشراكات محلية',229,328,362,38,26,navy,true,'center'); text(s,'التعاون مع مؤسسات داعمة وجامعات ومجتمعات شبابية لنشر الفكرة وتبنّيها.',203,386,414,62,19,muted,false,'center');
  text(s,'رسالة واضحة  →  اهتمام  →  تسجيل  →  رحلة تدريب وعمل',190,558,900,36,24,blue,true,'center'); footer(s,6);
}
//7 SWOT
{ const s=newSlide(); title(s,'صورة واقعية تساعدنا على البناء','تحليل SWOT');
  const items=[['نقاط القوة','فريق يمتلك الخبرة اللازمة لتنفيذ المشروع.',sky,735,220],['نقاط الضعف','رأس مال وموارد محدودة في مرحلة الإطلاق.','#F5F8FA',150,220],['الفرص','غياب خدمة مماثلة ضمن المنطقة.',sky,735,437],['التهديدات','انتشار منصات التعليم الإلكتروني المجانية.','#F5F8FA',150,437]];
  for(const [h,bg,fill,x,y] of items){}
  for (const [h, body, fill, x, y] of items) { box(s,x,y,395,166,fill); text(s,h,x+32,y+27,331,34,25,navy,true,'center'); text(s,body,x+35,y+79,325,55,18,muted,false,'center'); }
  footer(s,7);
}
//8 close
{ const s=newSlide(); box(s,0,0,1280,720,navy,'none');
  s.images.add({blob:logo,contentType:'image/jpeg',alt:'شعار Dr. Robot',fit:'contain',position:{left:515,top:70,width:250,height:220}});
  text(s,'نصنع معًا جيلًا تقنيًا قادرًا على العمل والنمو.',190,327,900,58,36,white,true,'center');
  text(s,'ندعوكم لتكونوا شركاء في بناء المشروع وتوسيع أثره في المجتمع.',200,418,880,42,25,'#D8EAF4',false,'center');
  box(s,412,521,456,64,gold); text(s,'لنحوّل الطموح إلى فرصة.',440,532,400,37,26,navy,true,'center');
  text(s,'نبرمج المهارة، ونصنع الفرصة.',245,641,790,24,15,'#9DC7DD',false,'center');
}

async function save(blob,path){ await fs.writeFile(path,new Uint8Array(await blob.arrayBuffer())); }
for (let i=0;i<deck.slides.items.length;i++) await save(await deck.export({slide:deck.slides.items[i],format:'png',scale:1}),`${DIR}/slide-${i+1}.png`);
await save(await deck.export({format:'webp',montage:true,scale:1}),`${DIR}/montage.webp`);
const pptx=await PresentationFile.exportPptx(deck); await pptx.save(OUT);
