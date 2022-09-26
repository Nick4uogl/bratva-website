import './Technologies.scss'
import reactImg from '../../img/technologies/react.png'
import angularImg from '../../img/technologies/angular.png'
import vueImg from '../../img/technologies/vue.png'
import nodeImg from '../../img/technologies/node.png'
import nextjsImg from '../../img/technologies/nextjs.png'
import springImg from '../../img/technologies/spring.png'
import hibernateImg from '../../img/technologies/hibernate.png'
import laravelImg from '../../img/technologies/laravel.png'
import djangoImg from '../../img/technologies/django.png'
import pythonImg from '../../img/technologies/python.png'
import csharpImg from '../../img/technologies/csharp.png'
import javaImg from '../../img/technologies/java.png'
import flutterImg from '../../img/technologies/flutter.png'
import dartImg from '../../img/technologies/dart.png'
import kotlinImg from '../../img/technologies/kotlin.png'
import cplusplusImg from '../../img/technologies/cplusplus.png'

export default function Technologies() {
    return (
        <section className='technologies'>
            <div className="technologies__container">
                <h2 className="technologies__title">Technologies</h2>
                <div className="technologies__categories">
                    <div className="technologies__item item-technologies item-technologies_b">
                        <h3 className="item-technologies__title">web-development</h3>
                        <div className="item-technologies__category category-item">
                            <h3 className="category-item__title">frontend</h3>
                            <img src={reactImg} alt="" />
                            <img src={angularImg} alt="" />
                            <img src={vueImg} alt="" />
                        </div>
                        <div className="item-technologies__category category-item category-item_b">
                            <h3 className="category-item__title">backend</h3>
                            <img src={nodeImg} alt="" />
                            <img src={nextjsImg} alt="" />
                            <img src={springImg} alt="" />
                            <img src={hibernateImg} alt="" />
                            <img src={laravelImg} alt="" />
                            <img src={djangoImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="technologies__categories">
                    <div className="technologies__item item-technologies item-technologies_s">
                        <h3 className="item-technologies__title">Mobile App dev</h3>
                        <div className="item-technologies__category category-item">
                            <img src={nodeImg} alt="" />
                            <img src={pythonImg} alt="" />
                            <img src={csharpImg} alt="" />
                            <img src={javaImg} alt="" />
                            <img src={flutterImg} alt="" />
                            <img src={dartImg} alt="" />
                            <img src={kotlinImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="technologies__categories">
                    <div className="technologies__item item-technologies item-technologies_s">
                        <h3 className="item-technologies__title">Desktop software</h3>
                        <div className="item-technologies__category category-item">
                            <img src={cplusplusImg} alt="" />
                            <img src={csharpImg} alt="" />
                            <img src={javaImg} alt="" />
                            <img src={pythonImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}