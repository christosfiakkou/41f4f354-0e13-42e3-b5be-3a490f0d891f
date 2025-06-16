import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { FavoritesService } from 'src/app/core/favorites.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  url!: string;

  constructor(
    private favSvc: FavoritesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.url = atob(id);
  }

  goBack() {
    this.router.navigate(['/favorites']);
  }

  remove() {
    this.favSvc.remove(this.url);
    this.router.navigate(['/favorites'], { replaceUrl: true });
  }
}
