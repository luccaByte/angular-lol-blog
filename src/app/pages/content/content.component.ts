import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover: string = "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8bd1c17cba18f90e/5f7fa5ecd4fbb50ef3077904/Seraphine_Skin_Explainer_Banner.jpg"
  contentTitle: string = "SERAPHINE K/DA ALL OUT: EXPLICANDO A SKIN ULTIMATE"
  contentDescription: string = "Em 2019, respondemos em um Pergunte à Riot se faríamos outra Skin Ultimate. Isso levou a um grande aprofundamento filosófico para definir o que são as Skins Ultimate, além das nuances para entregarmos um produto que possamos chamar de experiência realmente interativa. No artigo de 2020 sobre a Situação de Skins e Eventos , nos aprofundamos ainda mais não só no que tecnicamente define esse tier de skin, mas nos elementos que a comunidade considera fazer parte de uma skin Ultimate, além de corrigir nossos princípios a respeito da evolução de nossos tipos de skin."

  constructor(
    private route:ActivatedRoute
    ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("Id"))
    )
  }
}
