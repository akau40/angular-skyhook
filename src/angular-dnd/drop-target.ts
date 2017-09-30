import { NgZone } from '@angular/core';
import { DragDropMonitor } from 'dnd-core';
import { DropTargetMonitor } from './target-monitor';
import { invariant } from './invariant';

import { DndTypeOrTypeArray } from './type-ish';

export interface DropTargetSpec {
  // we would use DndTypeOrTypeArray but this is public API, gotta be usable on IDE hover
  /** Optional; use if you don't need it to change over time. */
  types?: DndTypeOrTypeArray;
  drop?: (monitor: DropTargetMonitor) => Object | void;
  hover?: (monitor: DropTargetMonitor) => void;
  canDrop?: (monitor: DropTargetMonitor) => boolean;
}

export function createTargetFactory(spec: DropTargetSpec, zone: NgZone) {

    class Target {
        monitor: DragDropMonitor;
        props: any;

        constructor(monitor: DragDropMonitor) {
            this.monitor = monitor;
        }

        receiveMonitor(monitor) {
            this.monitor = monitor;
        }

        canDrop() {
            if (!spec.canDrop) {
                return true;
            }

            return zone.run(() => {
              return spec.canDrop(this.monitor);
            });
        }

        hover() {
            if (!spec.hover) {
                return;
            }

            return zone.run(() => {
              spec.hover(this.monitor);
            });
        }

        drop() {
            if (!spec.drop) {
                return undefined;
            }

            return zone.run(() => {
              const dropResult = spec.drop(this.monitor);
              return dropResult;
            });
        }
    }

    return function createTarget(monitor: DragDropMonitor) {
        return new Target(monitor);
    };
}