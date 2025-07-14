import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeRoute: string = '';

  isSelected = false;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.activeRoute = this.router.url;
  }


  navigateTo(item: any) {
    
  }


  getSanitizedSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }


  sidebarItems = [
    { name: 'overview', label: 'Überblick', icon: 'assets/icons/überblick_normal.png' },
    { name: 'boardLayout', label: 'Board Layout', icon: 'assets/icons/board_layout_normal.png' },
    { name: 'controlling', label: 'Controlling', icon: 'assets/icons/controlling_normal.png' },
    { name: 'retroBoards', label: 'Retro Boards', icon: 'assets/icons/boards_normal.png' },
    { name: 'changeLog', label: 'Change Log', icon: 'assets/icons/log_normal.png' }
  ];

  boardItems = [
    { name: 'retroQ1', label: 'Retro Q1', icon: 'assets/icons/board_item_icon.png' },
    { name: 'retroQ2', label: 'Retro Q2', icon: 'assets/icons/board_item_icon.png' }
  ];

  selectedItem: string | null = null;
  dropdownOpen = false;
  isSettingsClicked = false;

  fading = false;

  onSelectItem(item: any) {
    
    this.selectedItem = item.name;
    this.isSettingsClicked = false;


  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation(); // Prevent parent click
    this.dropdownOpen = !this.dropdownOpen;

  }

  settingsClick(){
    this.selectedItem = null;
    this.isSettingsClicked = true;
  }

  getFirstLetterCapital(text: string): string {
    return text ? text.charAt(0).toUpperCase() : '';
  }



}
