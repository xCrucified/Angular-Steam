import { Component, OnInit } from '@angular/core';
import { EditionModel } from '../../services/editions';
import { Router } from '@angular/router';
import { EditionService } from '../../services/editions.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-edition-list',
  standalone: true,
  imports: [
    MatIcon,
    MatTableModule,
  ],
  templateUrl: './edition-list.component.html',
  styleUrl: './edition-list.component.css'
})
export class EditionListComponent implements OnInit{
  displayedColumns: string[] = ["image", "id", "name", "price", "discount"];
  tableSource = new MatTableDataSource<EditionModel>([]);
  editions: EditionModel[] = [];
  // displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  // dataSource = ELEMENT_DATA;
  constructor(
    private editionService: EditionService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.editionService.getAll().subscribe(res => {
      this.editions = res;
      this.refreshTable();
    });
  }
  onDelete(id: number): void {
    this.editionService.delete(id).subscribe(() => {
      const index = this.editions.findIndex(x => x.id === id);
      console.log(index);
      this.editions.splice(index, 1);
      console.log(this.editions);
      this.refreshTable();
    });
  }
  
  onEdit(id: number): void {
    this.router.navigate(["/edit", id]);
  }

  refreshTable() {
    this.tableSource.data = this.editions;
  }
}
